"use client";

import type { ChangeEvent, FocusEvent, FormEvent } from "react";
import { useState, useTransition } from "react";

type FormValues = {
  name: string;
  email: string;
  contactMethod: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  contactMethod: "",
  message: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "请输入姓名。";
  } else if (values.name.trim().length < 2) {
    errors.name = "姓名至少需要 2 个字符。";
  }

  if (!values.email.trim()) {
    errors.email = "请输入邮箱地址。";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "请输入有效的邮箱格式。";
  }

  if (!values.contactMethod.trim()) {
    errors.contactMethod = "请输入至少一种联系方式。";
  } else if (values.contactMethod.trim().length < 4) {
    errors.contactMethod = "联系方式信息过短，请补充更完整一些。";
  }

  if (!values.message.trim()) {
    errors.message = "请输入留言内容。";
  } else if (values.message.trim().length < 20) {
    errors.message = "留言内容建议不少于 20 个字符。";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    const key = name as keyof FormValues;
    const nextValues = { ...values, [key]: value };

    setValues(nextValues);

    if (errors[key]) {
      setErrors(validate(nextValues));
    }
  }

  function handleBlur(
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const nextValues = {
      ...values,
      [event.target.name]: event.target.value,
    } as FormValues;

    setErrors(validate(nextValues));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    startTransition(() => {
      setSubmitted(true);
      setValues(initialValues);
      setErrors({});
    });
  }

  const fieldClassName =
    "mt-2 w-full rounded-[18px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[rgba(148,161,179,0.7)] focus:border-[rgba(129,177,255,0.52)] focus:bg-[rgba(255,255,255,0.06)]";

  return (
    <div className="rounded-[30px] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(14,18,25,0.96),rgba(9,12,17,0.98))] p-6 shadow-[0_24px_56px_rgba(0,0,0,0.24)] sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
            Message
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
            发送一条合作信息
          </h2>
        </div>
        <span className="rounded-full border border-[rgba(255,255,255,0.08)] px-3 py-1 text-xs text-[var(--color-muted)]">
          前端校验已启用
        </span>
      </div>

      <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
        当前表单为前端展示版，适合静态部署。后续可直接接入邮箱服务、企业微信机器人或自定义后端 API。
      </p>

      {submitted ? (
        <div className="mt-6 rounded-[22px] border border-[rgba(123,175,255,0.24)] bg-[rgba(91,163,255,0.08)] p-5 text-sm leading-7 text-white/92">
          已完成前端提交校验，界面已模拟投递成功。正式上线时，可以把这里接到邮件服务或 CRM 流程中。
        </div>
      ) : null}

      <form className="mt-6 space-y-5" noValidate onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm text-white">
            姓名
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="例如：王女士 / 张先生"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={fieldClassName}
            />
            {errors.name ? (
              <span id="name-error" className="mt-2 block text-xs text-[#ffb4b4]">
                {errors.name}
              </span>
            ) : null}
          </label>

          <label className="block text-sm text-white">
            邮箱
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="name@company.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={fieldClassName}
            />
            {errors.email ? (
              <span id="email-error" className="mt-2 block text-xs text-[#ffb4b4]">
                {errors.email}
              </span>
            ) : null}
          </label>
        </div>

        <label className="block text-sm text-white">
          联系方式
          <input
            type="text"
            name="contactMethod"
            value={values.contactMethod}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="微信 / 手机 / 企业微信 / 电话"
            aria-invalid={Boolean(errors.contactMethod)}
            aria-describedby={errors.contactMethod ? "contact-error" : undefined}
            className={fieldClassName}
          />
          {errors.contactMethod ? (
            <span id="contact-error" className="mt-2 block text-xs text-[#ffb4b4]">
              {errors.contactMethod}
            </span>
          ) : null}
        </label>

        <label className="block text-sm text-white">
          留言
          <textarea
            name="message"
            rows={6}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="可以简要说明合作背景、产品阶段、项目周期或岗位信息。"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${fieldClassName} resize-none`}
          />
          {errors.message ? (
            <span id="message-error" className="mt-2 block text-xs text-[#ffb4b4]">
              {errors.message}
            </span>
          ) : null}
        </label>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full border border-[rgba(123,175,255,0.52)] bg-[linear-gradient(135deg,rgba(101,162,255,0.28),rgba(62,107,173,0.18))] px-5 py-3 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(147,193,255,0.82)] disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isPending}
        >
          {isPending ? "提交中..." : "发送留言"}
        </button>
      </form>
    </div>
  );
}

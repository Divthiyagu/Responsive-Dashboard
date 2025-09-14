import React, { useState } from 'react';

const Settings = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.username.trim()) errs.username = 'Username is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email';
    return errs;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      alert('Settings saved!');
    }
  };

  return (
    <section className="settings-page">
      <h2>Settings</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            aria-invalid={errors.username ? 'true' : undefined}
            aria-describedby="username-error"
          />
          {errors.username && <div id="username-error" className="error-msg">{errors.username}</div>}
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={errors.email ? 'true' : undefined}
            aria-describedby="email-error"
          />
          {errors.email && <div id="email-error" className="error-msg">{errors.email}</div>}
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </section>
  );
};

export default Settings;

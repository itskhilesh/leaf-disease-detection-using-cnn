export default function AlertBanner({ kind = 'info', children }) {
  const variant =
    kind === 'bad'
      ? 'alert-banner--bad'
      : kind === 'warn'
        ? 'alert-banner--warn'
        : 'alert-banner--info';

  return <div className={`alert-banner ${variant}`}>{children}</div>;
}

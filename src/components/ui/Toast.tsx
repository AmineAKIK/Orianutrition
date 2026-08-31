export function Toast({ message }: { message: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="border border-sage bg-paper px-4 py-3 text-sm text-forest shadow-sm"
    >
      {message}
    </div>
  );
}

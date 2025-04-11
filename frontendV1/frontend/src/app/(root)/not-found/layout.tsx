export default function NotFoundLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>
          <main className="not-found">{children}</main>
        </body>
      </html>
    );
  }
  
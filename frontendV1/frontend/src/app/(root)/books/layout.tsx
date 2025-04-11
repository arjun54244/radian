export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div suppressHydrationWarning={true}>
            {children}
        </div>
    )
}

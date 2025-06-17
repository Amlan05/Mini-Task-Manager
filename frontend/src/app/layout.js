import './globals.css';

export const metadata = {
  title: 'Mini Task Manager',
  description: 'Internship Test App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import './global.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>

      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className='bg-default'>{children}</body>
    </html>
  );
}
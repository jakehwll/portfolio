import "~/styles/globals.css";

export const metadata = {
  title: 'Jake Howell - Software Engineer, Australia',
  description: 'Hi! My name is Jake and I am a Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" /> 
      </head>
      <body>
        <main className={`font-sans`}>
          {children}
        </main>
      </body>
    </html>
  )
}

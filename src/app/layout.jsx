import { WeatherContextProvider } from "@/contexts/WeatherContext";
import './globals.css'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>Weather</title>
      </head>
      <body>
        <WeatherContextProvider>
          {children}
        </WeatherContextProvider>
      </body>
    </html >
  );
}
import '../styles/globals.css';
import Navbar from '../../components/Navbar';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
              <div>
              <Navbar />
              </div>
                <main>{children}</main>
            </body>
        </html>
    );
}


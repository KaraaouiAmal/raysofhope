import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children, leftContent, leftLogin  }) {
    return (
                    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0" style={{ backgroundColor: '#526D82' }}>
            <div>
                <Link href="/">
                <ApplicationLogo className="w-20 h-20 fill-current text-gray-100 " />
                </Link>
            </div>

            <div className="w-full sm:max-w-6xl mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg" style={{ backgroundColor: '#EEE2DE' }}>
                <div className="grid grid-cols-3 ">
                <div className="col-span-1 pr-4">{leftContent}{leftLogin}</div>
                <div className="col-span-2 pl-4">{children}</div>
                </div>
                </div>
            </div>
            
    );
}

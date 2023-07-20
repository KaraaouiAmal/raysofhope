import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';




export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout leftLogin={
            <>
            <h1 className="text-4xl ml-8 mb-16 py-2 px-2 block text-left" style={{ fontWeight: '900', fontSize:48 }}>
            <span className="block mt-[3.5rem]">WELCOME</span>
            <span className="block mt-6">BACK!</span>
            </h1>
            <p className="text-left ml-8">
            Step into a world of care and empathy. Logging in connects you to a community that's devoted to making a difference. 
            Let's spark hope and shape a brighter future, together.
          </p>
        </>
        }>
            <Head title="Log in" />
            <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 mt-6 relative">
                Login
                <hr className=" border-black w-24 absolute bottom-0 left-1/2 transform -translate-x-1/2"></hr>
                </h2>
            </div>
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <div className="mt-4 grid grid-cols-1 gap-2 items-center py-8 justify-center">
                <div>
                    <InputLabel htmlFor="email" value="Email" className="ml-[11.5rem]" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-1/2 mx-auto"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                        />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" className="ml-[11.5rem]" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-1/2 mx-auto"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                        />

                    <InputError message={errors.password} className="mt-2" />
                </div>
                </div>

                <div className="block mb-[0.2rem] ml-[11.5rem]">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            />
                        <span className="ml-2  text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex flex-col items-center justify-center mt-4">
                {canResetPassword && (
                    <Link
                    href={route('password.request')}
                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-2"
                    >
                    Forgot your password?
                    </Link>
                )}

                <PrimaryButton className="w-1/3 flex items-center justify-center" disabled={processing}>
                    Log in
                </PrimaryButton>

                <Link
                    href={route('register')}
                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2"
                >
                    New User? Register
                </Link>
                </div>

            </form>
        </GuestLayout>
    );
}

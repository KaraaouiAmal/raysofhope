import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';


export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout   leftContent={
            <>
             <div className="p-8 flex flex-col justify-center items-center h-full">
              <h1 className="text-4xl text-center mb-16" style={{ fontWeight: '900', fontSize:48 }}>WELCOME</h1>
              <div className="text-left max-w-lg" style={{ fontSize:20 }}>
              <p>
                Embrace your journey as a guardian of hope, an advocate for change.
                By joining us, you become the lifeline for those in need.
                Together, we'll nurture dreams, wipe away tears, and restore faith in a brighter tomorrow.
              </p>
              </div>
              </div>
            </>
          }
        >
        <Head title="Register" />
                    <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 relative">
                Register
                <hr className=" border-black w-32 absolute bottom-0 left-1/2 transform -translate-x-1/2"></hr>
            </h2>
            </div>


<div className="container">
  <div className="form-container">
    <form className="my-form" onSubmit={submit}>
      <div className="mt-4 flex">
        <div className="w-1/2 flex flex-col">
          <InputLabel htmlFor="firstname" value="Firstname" />
          <TextInput
            id="firstname"
            name="firstname"
            value={data.firstname}
            className="mt-1 block w-full"
            autoComplete="given-name"
            isFocused={true}
            onChange={(e) => setData('firstname', e.target.value)}
            required
          />
          <InputError message={errors.firstname} className="mt-2" />
        </div>

        <div className="w-1/2 flex flex-col ml-4">
          <InputLabel htmlFor="lastname" value="Lastname" />
          <TextInput
            id="lastname"
            name="lastname"
            value={data.lastname}
            className="mt-1 block w-full"
            autoComplete="name"
            onChange={(e) => setData('lastname', e.target.value)}
            required
          />
          <InputError message={errors.lastname} className="mt-2" />
        </div>
      </div>

      <div className="mt-4 flex">
        <div className="w-1/2 flex flex-col">
          <InputLabel htmlFor="email" value="Email" />
          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            onChange={(e) => setData('email', e.target.value)}
            required
          />
          <InputError message={errors.email} className="mt-2" />
        </div>

        <div className="w-1/2 flex flex-col ml-4">
          <InputLabel htmlFor="phoneNumber" value="PhoneNumber" />
          <TextInput
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            value={data.phoneNumber}
            className="mt-1 block w-full"
            autoComplete="tel"
            onChange={(e) => setData('phoneNumber', e.target.value)}
            required
          />
          <InputError message={errors.phoneNumber} className="mt-2" />
        </div>
      </div>

        <div className="mt-4 flex">
            <div className="w-1/2 flex flex-col">
            <InputLabel htmlFor="address" value="Address" />
            <TextInput
                id="address"
                type="text"
                name="address"
                value={data.address}
                className="mt-1 block w-full"
                autoComplete="address"
                onChange={(e) => setData('address', e.target.value)}
                required
            />
            <InputError message={errors.address} className="mt-2" />
            </div>
            <div className="mt-4">
    <InputLabel htmlFor="userType" value="User Type" className=" mt-8 ml-8"/>
    <div className="flex items-center space-x-4 mt-4 ml-8">
        <label className="flex items-center">
        <input
            type="radio"
            name="userType"
            value="individual"
            checked={data.userType === 'individual'}
            onChange={(e) => setData('userType', e.target.value)}
            className="form-radio h-4 w-4 text-red-500"
        />
        <span className="ml-2 text-gray-700">Individual</span>
        </label>

        <label className="flex items-center">
        <input
            type="radio"
            name="userType"
            value="organization"
            checked={data.userType === 'organization'}
            onChange={(e) => setData('userType', e.target.value)}
            className="form-radio h-4 w-4 text-red-500"
        />
        <span className="ml-2 text-gray-700">Organization</span>
        </label>
    </div>

    <InputError message={errors.userType} className="mt-2" />
    </div>
    </div>

      <div className="mt-4">
        <InputLabel htmlFor="password" value="Password" />

        <TextInput
          id="password"
          type="password"
          name="password"
          value={data.password}
          className="mt-1 block w-1/2"
          autoComplete="new-password"
          onChange={(e) => setData('password', e.target.value)}
          required
        />

        <InputError message={errors.password} className="mt-2" />
      </div>


                {/* <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div> */}

                <div className="flex justify-center mt-6">
                <PrimaryButton disabled={processing}>
                    Register
                </PrimaryButton>
                </div>
                <div className="flex justify-end mt-4">
                <Link
                    href={route('login')}
                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Already registered?
                </Link>
                </div>
            </form>
            </div>
            </div>
        </GuestLayout>
    );
}





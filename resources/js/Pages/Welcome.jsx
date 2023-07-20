import React from 'react';
import { Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Button } from '@material-tailwind/react';
import travailenfants from '@/images/travailenfants.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Rectangle from '@/Components/Rectangle';


export default function Welcome({ auth }) {
  return (
    <div className="min-h-screen" style={{ background:'#B62D2D' }}>
      <div className="p-10 flex items-center justify-between" >
        <div style={{position : 'sticky', left: '74rem'}} className="ml-auto">
          {auth.user ? (
            <Link href={route('dashboard')} className="text-white font-semibold hover:text-gray-200">
              Dashboard
            </Link>
          ) : (
            <>
              <Link href={route('login')} className="text-white font-semibold hover:text-gray-200">
              <FontAwesomeIcon icon={faUser} className="mr-2"/>
                Log in
              </Link>
              <Link href={route('register')} className="ml-4 text-white font-semibold hover:text-gray-200">
              <FontAwesomeIcon icon={faUser} className="mr-2"/>  
                Register
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="p-6 flex justify-end "style={{ marginBottom: '-10px', wordSpacing: '5px' , marginTop :'1.5rem'}}>
        <div className="space-x-16 ml-auto" style={{letterSpacing:'3px' ,fontSize:'1.25em',marginTop:'-47px'}}>
          <Link href="/" className="text-white font-semibold hover:text-gray-200">
            About Us
          </Link>
          <Link href="/" className="text-white font-semibold hover:text-gray-200">
            Events
          </Link>
          <Link href="/" className="text-white font-semibold hover:text-gray-200">
            Contact Us
          </Link>
          <Link href="/" className="text-white font-semibold hover:text-gray-200">
            <Button className="rounded-full bold-text" style={{backgroundColor: '#F2902F', letterSpacing:'2.5px',fontSize:"1em",padding: '16px 28px',color:'#522222'}} >
            Feed
            </Button>
          </Link>
          <Link href="/" className="text-white font-semibold hover:text-gray-200" >
            <Button className="rounded-full bold-text" style={{backgroundColor: '#F2902F', letterSpacing:'2.5px',fontSize:'1em', padding: '16px 28px',color:'#522222'}}>
            Donate
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <img src={travailenfants} alt="imgkid" style={{ position: 'relative', top: '2px', left: '0px', height: '35rem', clipPath: 'ellipse( 780px 780px at 20% 20%)', borderRadius: '45% 0 0 0', boxShadow: '0 20px 50px 30px rgba(0, 0, 0, 0.1)'}} />
        <div className="flex flex-col items-center justify-end" style={{marginTop:'-450px',marginLeft:'800px'}}>
        <div className="text-white text-left">
          <span className="block font-bold text-6xl">Touching Lives,</span>
          <span className="block font-bold text-6xl">Lives,</span>
          <span className="block font-bold text-6xl mt-4">Creating</span>
          <span className="block font-bold text-6xl">Miracles.</span>
          </div>
          <div className="mt-10">
            <p className="text-white font-bold text-lg" style={{ color: 'rgba(255, 255, 255, 0.5)'}}>
              In a world that can sometimes feel cold and distant, 
              <br />
              let's embrace the warmth of 
              <br />
              compassion and create a haven of love 
              <br />
              for those in need.
              </p>
          </div>
        </div>
        <div>
        <ApplicationLogo className="w-48 h-48 ml-4 fill-current text-gray-100" style={{ position: 'absolute', left:90, top:'70px'}} />
        </div>
      </div>
      <Rectangle/>
    </div>
  );
}

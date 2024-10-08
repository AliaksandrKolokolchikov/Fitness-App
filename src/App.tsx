import './index.css';

import {Navbar} from '@/components/Navbar/Navbar.tsx'
import {useEffect, useState} from "react";
import {SelectedPage} from "@/shared/types.ts";
import {Home} from "@/components/home";



function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () =>{
            if(window.scrollY === 0){
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home)
            }
            if(window.scrollY !== 0) setIsTopOfPage(false);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
      <div className='bg-gray-20'>
        <Navbar
            isTopOfPage={isTopOfPage}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
        />
          <Home  setSelectedPage={setSelectedPage} />
      </div>
  )
}

export default App

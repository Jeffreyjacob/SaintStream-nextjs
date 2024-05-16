import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import NavItem from './NavItem';
import {AlignRight} from 'lucide-react';


const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger className='mx-3'>
            <AlignRight className='h-8 w-8 text-white'/>
            </SheetTrigger>
            <SheetContent className=' bg-primary-500  text-white border-none'>
                <SheetHeader>
                    <SheetDescription>
                        <NavItem/>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
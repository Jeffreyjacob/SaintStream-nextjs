"use client"
import { Check } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Logo from '@/public/assets/images/logo.png';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plans } from '@/constants';
import { Button } from '@/components/ui/button';
import { CreatePlan } from '@/lib/actions/user.action';
import Plan from '@/lib/database/models/plan.model';
import { CreateCheckoutOrder, CreateSubscriber } from '@/lib/actions/subscribe.action';
import {loadStripe} from '@stripe/stripe-js';
import { useUser } from '@clerk/nextjs';

const PlanDetails = [
  {},
  {id:"6646ff1328ec0085102681f1",name:"Basic",price:"7.99"},
  {id:"6646ff6c28ec0085102681f5",name:"Standard",price:"10.99"},
  {id:"6646ff9828ec0085102681f7",name:"Premium",price:"13.99"}
]
loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);


const Page = () => {
  const {user} = useUser();
  const userId = user?.publicMetadata.userId as string;
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);
   const CreatePlan = async ({price,id,type}:{price:string,id:string,type:string})=>{
    const subsribe = {
      planType:type,
      planId:id,
      price:price,
      buyerId:userId
    }
    console.log(subsribe)
    await CreateCheckoutOrder(subsribe);
   }
  return (
    <div className='flex min-h-screen items-center justify-center bg-primary-500  md:bg-black text-white'>
      <div className='md:bg-primary-500 rounded-lg w-full px-5 md:px-16 md:w-[900px] py-10 md:py-0 md:my-10 md:h-[650px]' >
        <div className='flex flex-col md:flex-row justify-between md:mt-14'>
          <div>
            <h2 className='text-[22px] font-semibold mb-3'>Choose the plan that's right for you</h2>
            <p className='flex gap-2 text-[12px] font-light'>
              <Check className='w-4 h-4 text-primaryGreen-500' />
              <span>
                Unlimited movies and Tv shows.Watch all you want ad-free
              </span>
            </p>
            <p className='flex gap-2 text-[12px] font-light'>
              <Check className='w-4 h-4 text-primaryGreen-500' />
              <span>
                Change or cancel your plan anytime
              </span>
            </p>
          </div>
          <div className='flex flex-row justify-start mt-4 md:mt-0 md:justify-center items-center'>
            <div className=' bg-[#202020] font-normal flex items-center py-3 px-3 rounded-lg'>
              <Image src="https://img.icons8.com/3d-fluency/94/gift.png" alt=''
                width={50} height={45} />
              Start your free month
            </div>
          </div>
        </div>


        <div className='flex flex-col md:flex-row mt-10'>
          <Table>
            <TableHeader>
              <TableRow className='border-none hover:bg-primary-500'>
                <TableHead className="text-left w-[220px]">
                  <Image src={Logo} alt=''
                    width={100} height={50} />
                </TableHead>
                <TableHead className='w-[120px]'>
                <div className='text-white gap-2 my-3  ml-5'>
                    <p className='md:text-[14px] font-light text-[9px] w-[30px]'>Basic</p>
                 <span className='md:text-[19px] font-semibold text-[12px]'>$ 7.99</span>
                  </div>
                </TableHead>
                <TableHead className='w-[120px]'>
                <div className='text-white gap-2 my-3  ml-5'>
                    <p className='md:text-[14px] font-light text-[9px]'>Standard</p>
                 <span className='md:text-[19px] font-semibold text-[12px]'>$ 10.99</span>
                  </div>
                </TableHead>
                <TableHead className='w-[120px]'>
                <div className='text-white gap-2 my-3  ml-5'>
                    <p className='md:text-[14px] font-light text-[9px]'>Premium</p>
                 <span className='md:text-[19px] font-semibold text-[12px]'>$ 13.99</span>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                Plans.map((plan, index) => (
                  <TableRow key={index} className="h-[60px] border-none hover:bg-[#0e0e0e] hover:text-primaryGreen-500 text-[9px] md:text-[15px] ">
                    <TableCell >
                      {plan.Detail.description}
                      </TableCell>
                    <TableCell className='text-center hover:bg-[#202020] rounded-lg'>{plan.Basic}</TableCell>
                    <TableCell className='text-center hover:bg-[#202020] rounded-lg'>{plan.Standard}</TableCell>
                    <TableCell className='text-center hover:bg-[#202020] rounded-lg'>{plan.Premium}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
            <TableFooter className=' bg-transparent border-none'>
              <TableRow className=' hover:bg-transparent'>
              {
              PlanDetails.map((plans,index)=>(
                <TableCell key={index} className='text-center py-2'>
                  {
                    plans.name && <Button onClick={()=>CreatePlan({price:plans.price,id:plans.id,type:plans.name})} className=' bg-primaryGreen-500 text-white font-semibold hover:bg-primaryGreen-500/30 md:text-[14px] text-[9px]'>
                      Choose Plan
                    </Button>
                  }
                </TableCell>
              ))
             }
              </TableRow>
            </TableFooter>
          </Table>

        </div>


      </div>
    </div>
  )
}

export default Page
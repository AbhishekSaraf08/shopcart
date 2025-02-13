'use client'
import {Footer} from '@/components/Layout/Footer';
import NavBar from '@/components/Layout/NavBar'
import React from 'react'
import { Suspense } from 'react';
export default function GloabalLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className='flex flex-col   w-full  overflow-x-hidden    items-center'>
        <NavBar/>
        <Suspense>
        {children}
        </Suspense>
        <Footer/>
   </div>
  )
}

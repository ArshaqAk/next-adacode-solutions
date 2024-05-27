"use client"
import React from 'react'
import logo_avatar from '../assets/logo-light.png'
import { FloatingWhatsApp } from "react-floating-whatsapp";
function WhatsappIcon() {
    const avatarUrl = logo_avatar.src;

  return (
    <>
        <FloatingWhatsApp
        phoneNumber="+919947276566"
        accountName="ADACODE SOLUTIONS"
        avatar={avatarUrl}
      />

    </>
  )
}

export default WhatsappIcon

import React from 'react'
import Button from './Button'
const ButtonList = () => {
  return (
    <div className="flex">
        <Button name="ALL"/>
        <Button name="Gaming"/>
        <Button name="Songs"/>
        <Button name="Live"/>
        <Button name="Cricket"/>
        <Button name="Cooking"/>
        <Button name="Knowledge"/>
        <Button name="Tech"/>
        <Button name="News"/>
        <Button name="Podcasts"/>
        <Button name="Watched"/>
    </div>
  )
}

export default ButtonList
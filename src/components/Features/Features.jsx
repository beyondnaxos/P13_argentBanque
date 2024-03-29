import React from 'react'
import { Feature } from '../Feature/Feature'

/**
 * @returns {JSX.Element} A JSX Features component.
 * @component
 * @name Features
 * @description A component that displays a features section with three Feature components.
 * @example <Features />
 */

export const Features = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <Feature
        icon="./img/icon-chat.png"
        alt="Chat Icon"
        title="You are our #1 priority"
        text="Need to talk to a representative? You can get in touch through our
      24/7 chat or through a phone call in less than 5 minutes."
      />
      <Feature
        icon="./img/icon-money.png"
        alt="Money Icon"
        title="More savings means higher rates"
        text="The more you save with us, the higher your interest rate will be!"
      />
      <Feature
        icon="./img/icon-security.png"
        alt="Security Icon"
        title="Security you can trust"
        text="We use top of the line encryption to make sure your data and money
      is always safe."
      />
    </section>
  )
}

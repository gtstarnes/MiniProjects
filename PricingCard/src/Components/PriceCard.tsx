import React from 'react';
import { useState } from 'react'

const plans = [
    {
      id: 1,
      plan: "Starter",
      price: "$19",
      annual: "$209",
      features: [
        "500MAUs", "3 Projects", "Unlimited guides", "Unlimited flows", "Unlimited branded themes", "Email support"
      ]
    },
    {
      id: 2,
      plan: "Pro",
      price: "$99",
      annual: "$1089",
      features: [
        "2500MAUs", "All starter features plus:", "Unlimited projects", "Unlimited fully customizable themes", "A dedicated Customer Success Manager"
      ]
    },
    {
      id: 3,
      plan: "Enterprise",
      price: "Let's Talk",
      features: [
        "Unlimited MAUs", "All starter features", "All Pro features", "Dedicated environment", "Enterprise account administration", "Premium support and services"
      ]
    }
  ]

const PriceCardItem = (props: any) => {
  const [annual, setAnnual] = useState(true);

  return (
    <article className="bg-[#202020] w-[100%] flex flex-col items-center gap-6 px-8 pt-8 rounded-md h-[600px] max-w-[500px]">
        <h4 className="text-xl">{props.card.plan}</h4>
        {!annual ? <h1 className="text-5xl font-bold">{props.card.price}</h1> : <h1 className="text-5xl font-bold">{props.card.annual}{props.card.plan === "Pro" ? <span className="text-xl">/ per Month</span> : ""}</h1>}
        <ul className="list-disc marker:text-red-500 ">{props.card.features.map((feature: string) => {
            return <li className="mt-4">{feature}</li>
        })}
        </ul>
        <button className={props.card.plan === "Pro" ? "bg-red-500 w-60 h-16 rounded-sm mt-[120px] active:bg-red-700" : props.card.plan === "Enterprise" ?  "w-60 h-16 rounded-sm mt-[130px] active:bg-red-500 border border-red-500" : "w-60 h-16 rounded-sm mt-20 active:bg-red-500 border border-red-500"}>Choose Plan</button>
    </article>
  )
}

const PriceCard = () => {
    return (
        <section className="w-[90%] mx-4 flex flex-wrap gap-10 justify-center">
        {plans.map((card: any) => {
            return <PriceCardItem card={card} key={card.id} />;
          })}
        </section>
    )
}


export default PriceCard
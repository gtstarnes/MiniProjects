import React from 'react';


const plans = [
    {
      id: 1,
      plan: "Starter",
      price: "$19",
      features: [
        "500MAUs", "3 Projects", "Unlimited guides", "Unlimited flows", "Unlimited branded themes", "Email support"
      ]
    },
    {
      id: 2,
      plan: "Pro",
      price: "$99",
      features: [
        "2500MAUs", "All starter features plus:", "Unlimited projects", "Unlimited fully customizable themes", "A dedicated Customer Success Manager"
      ]
    },
    {
      id: 3,
      plan: "Starter",
      price: "Let's Talk",
      features: [
        "Unlimited MAUs", "All Pro features", "Dedicated environment", "Enterprise account administration", "Premium support and services"
      ]
    }
  ]

const PriceCardItem = (props: any) => {
  return (
    <article>
        <h4>{props.card.plan}</h4>
        <h1>{props.card.price}</h1>
        <ul>{props.card.features.map((feature: string) => {
            return <li>{feature}</li>
        })}
        </ul>
        <button>Choose Plan</button>
    </article>
  )
}

const PriceCard = () => {
    return (
        <section>
        {plans.map((card: any) => {
            return <PriceCardItem card={card} key={card.id} />;
          })}
        </section>
    )
}


export default PriceCard

const ChangeDollar = ({priceHandler, currentPrice}) => {
  
  return (
    <button onClick={priceHandler}>{currentPrice? 'Change price to ARS' : 'Change price to USD'}</button>
  )
}

export default ChangeDollar

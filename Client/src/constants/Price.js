const Price = ({ amount, currency = "USD", locale = "en-US" }) => {
    const formattedPrice = new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(amount);
  
    return <div>{formattedPrice}</div>;
  };
  
  export default Price;
  
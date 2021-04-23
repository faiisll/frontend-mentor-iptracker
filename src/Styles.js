const size = {
    mobile: "375px",
    tablet: "750px",
  };
  
  export const theme = {
    colors: {
      gray100: "hsl(0, 0%, 59%)",
      gray200: "hsl(0, 0%, 17%)",
      black: "hsl(0, 0%, 0%)",
      white: "#ffffff",
      red: "#BD1111",
    },

    fontSize: {
        title: "2rem",
        mobileTitle: "1.25rem",
    
        label: "0.75rem",
        mobileLabel: "0.625rem",
    
        card: "1.5rem",
        mobileCard: "1rem",
    
        input: "1.125rem",
        mobileInput: "1rem",
      },
    
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
    device: {
        mobile: `(min-width: ${size.mobileM})`,
        tablet: `(min-width: ${size.tablet})`,
      },
}
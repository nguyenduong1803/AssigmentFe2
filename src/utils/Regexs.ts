class Regexs {
    public phone = /^[0-9]*$/;
    public optionalEmail = /^(?:[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})?$/i;
    public email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i;
    public uidNumber = /^([\d]{3}\.[\d]{3}\.[\d]{3})?$/;
    public uidCodeAndNumber = /^(CHE-[\d]{3}\.[\d]{3}\.[\d]{3})?$/i;
    public number = /^\d*\.?\d*$/;
    public transportPrice = /^[+-]?([\d]+\.?[\d]*|\.[\d]+)$/;
    public decimal = /^[0-9]{1,7}(\.[0-9]{1,2})?$/;
    public load = /^(?=.*[1-9])\d*(?:\.\d*)?$/;
    public disposition = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
  
    public decimalNumber = /^\d+\.?\d+$/;
    public numberTwoDecimalPlaces = /^[0-9]*(\.[0-9]{1,2})?$/;
  
    public isTransportPrice(value?: string): value is string {
      if (typeof value !== 'string') return false;
      return (
        new RegExp(this.decimalNumber).test(value) &&
        new RegExp(this.numberTwoDecimalPlaces).test(value)
      );
    }
  }
  
  export default new Regexs();
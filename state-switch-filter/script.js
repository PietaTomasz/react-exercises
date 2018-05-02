class Languages extends Component{
  state = {
    array: [...Data]
  }
  filterHandler = (event) => {
    let lang = event.target.getAttribute('lang');
    switch (lang) {
      case 'polish': {
        this.setState({
          array: [...Data].filter((array) => array.lang === 'polish')
        });
        break;
      }
      case 'english': {
        this.setState({
          array: [...Data].filter((array) => array.lang === 'english')
        });
        break;
      }
      case 'french': {
        this.setState({
          array: [...Data].filter((arrya) => array.lang === 'english')
        });
        break;
      }
      default: {
        this.setState({array: [...Data]});
        break;
      }
    }
  }
}
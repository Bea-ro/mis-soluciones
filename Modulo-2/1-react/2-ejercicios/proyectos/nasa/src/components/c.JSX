const [apod, setApod] = useState([]) //APOD
  const [date, setDate] = useState(1) //DATE
  
const loadApod =
  async (date) => {
    try {
      const res = await fetch(`xxx`);
      const response = await res.json();
      return response;
    } catch (err) {
      console.log('Error cargando apod con fecha:', date);
      console.log(err);
    }
  }

  useEffect(() => {
    async () => {
        const data = loadApod(date);
        const newApodInfo = {...apod, data};
        setApod(newApodInfo)
      }
  }, []);


    



  
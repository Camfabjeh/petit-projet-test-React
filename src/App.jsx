import Title from './components/Title'
import Cards from './components/Cards'


const data = [
  {
    id: 1,
    title: "la trompette",
    img: "https://svgsilh.com/svg/37676.svg",
    isFavorite: false,
  },
  {
    id: 2,
    title: "le violon",
    img: "https://cdn.pixabay.com/photo/2012/04/05/01/32/violin-25679_960_720.png",
    isFavorite: false,
  },
  {
    id: 3,
    title: "la flûte traversière",
    img: "https://images.assetsdelivery.com/compings_v2/nikkytok/nikkytok1901/nikkytok190100026.jpg",
    isFavorite: false,
  }
]


function App() {

  return (
    <div className="app">
      <Title />
      {data.map((el) => {
        return (
          <Cards title={el.title} img={el.img} isFavorite={el.isFavorite} key={el.id} />
        )
      })}

    </div>
  )
}

export default App

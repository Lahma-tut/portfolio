import { data } from './../data/data'

type TypePortfolio = {
  id: number
  title: string
  description: string
  githab: string
  site: string
}

export default function CardLists() {
  return (
    <section className='card'>
      {data.map((item: TypePortfolio) => (
          <article key={item.id} className="card-item">
            <h3>{ item.title }</h3>
            <p>{ item.description}</p>
            <div className="card-href">
              {item.githab ? <a href={item.githab}>GitHab</a> : ''}
              {item.site ? <a href={item.site}>Web</a> : ''}
            </div>
          </article>
        ))
      }
    </section>
  )
}
import { MarsCanvas } from '../../components/canvas';
import { planetsInfo } from '../../constants';

const Planets = () => {
  return (
    <div>
    {planetsInfo.map((planet) => (
      <div 
        key={planet.name}
        className='flex py-2'>
        <div className="planet">
          <MarsCanvas planetScale={planet.planetScale} imageTexture={planet.texture} />
        </div>
        <div className='flex flex-col gap-1'>
          <h1 className='smallHeader'>{planet.name}</h1>
          <p className='smallParagraph'>{planet.content}</p>
        </div>
      </div>
    ))}
    </div>
  )
}

export default Planets
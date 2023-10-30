
const Categories = ({selected, onChange}) => {

  function handleCbClick(ev) {
    // alert(ev);
    // console.log(ev.target.checked);
    const {checked,name} = ev.target;
    if (checked) {
      onChange([...selected, name])
    } else {
      onChange([...selected.filter(selectedName => selectedName !== name)])
    }
  }

  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        <label className='perk'>
          <input    
            type='checkbox'
            onChange={handleCbClick}
            name='Web Dev '
            checked={selected.includes('Web Dev ')}
          />
          <span>Web Development</span>
        </label>
        <label className='perk'>
          <input  
            type='checkbox'
            onChange={handleCbClick}
            name='Game Dev '
            checked={selected.includes('Game Dev ')}
          />
          <span>Game Development</span>
        </label>
        <label className='perk'>
          <input 
            type='checkbox'
            onChange={handleCbClick}
            name='3D Graphics ' 
            checked={selected.includes('3D Graphics ')}
          />
          <span>3D Graphics</span>
        </label>
        <label className='perk'>
          <input 
            type='checkbox'
            onChange={handleCbClick}
            name='Pixel Art '
            checked={selected.includes('Pixel Art ')}
          />
          <span>Pixel Art</span>
        </label>
        <label className='perk'>
          <input 
            type='checkbox'
            onChange={handleCbClick}
            name='C# Programming '
            checked={selected.includes('C# Programming ')}
          />
          <span>C# Programming</span>
        </label>
        <label className='perk'>
          <input 
            type='checkbox'
            onChange={handleCbClick}
            name='JS Programming '
            checked={selected.includes('JS Programming ')}
          />
          <span>JS Programming</span>
        </label>
      </div>
      
    </>
  )
}

export default Categories
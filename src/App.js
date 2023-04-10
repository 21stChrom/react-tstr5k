const renderFiles = () => {

  const containers = []; for (let i = 0; i < 30; i++) {

  const file = files[i]; containers.push(

  <div

  key={i}

  className={file-container

  hidden-${i + 1}'}

  onClick={() => console.log('File ${i + 1}

  clicked')}
  >

  {file? <span>{file.name}

  <\span> : null}
  </div>
  );
  }

  return (

  <div

  className="outer-container" >
  const onMouseMove={handleMouseEnter} 
  const onMouseLeave={handleMouseLeave}
   {containers}</div>

  );

  };
}

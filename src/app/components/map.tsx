export default function Map(props: any) {
  return (
    <>
      <iframe
        src={ props.src }
        style={{ border: 0, height: '100%', width: '100%' }}
        loading="lazy">
      </iframe>
    </>
  )
}

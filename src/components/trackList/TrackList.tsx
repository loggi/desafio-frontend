import "./TrackList.css"

type TrackListProgress = {
  dateTime: string
  status: string
  location: string
}

interface TrackListProps {
  list: Array<TrackListProgress>
}

export const TrackList = ({ list }: TrackListProps) => {
  return (
    <dl className="track__list">
      {list.reverse().map(({ dateTime, status, location }) => (
        <div key={dateTime}>
          <dt className="track__title">
            <time className="track__datetime">{dateTime}</time>
          </dt>
          <dd className="track__description">
            <p className="track__status">{status}</p>
            {location && (
              <address className="track__locale">{location}</address>
            )}
          </dd>
        </div>
      ))}
    </dl>
  )
}

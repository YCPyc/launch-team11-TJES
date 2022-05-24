import React from 'react'

export default function ClassObj({info}) {
    const l = info.Teacher._key.path.segments.length;
  return (
    <div>
      <h3>{info.Subject}</h3>
      <h3>{info.ClassName}</h3>
      <h3>{info.Teacher._key.path.segments[l - 1]}</h3>

    </div>
  )
}

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'
import { cardMapper } from "../utilities/mapHelper"
import { axiosHelper } from "../utilities/axiosHelper"

export default function APIPage() {
  const [APIData, setAPIData] = useState([])
  const [submit, setSubmit] = useState(false)

  useEffect(() => axiosHelper({
    successMethod: setAPIData,
    route: "todos",
  }), [])


  useEffect(() => axiosHelper({
    method: "post",
    data: { userId: 1, title: 'Et reiciendis vel in odio eos quas sit.' },
    route: "todo/post",
  }), [submit])

  return (
    <div>
      {
        APIData
          ? cardMapper(APIData)
          : <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
      }
    </div>
  )
}

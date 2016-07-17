export function reducer(state=[], {type, body, postBody}) {
  const {indexify} = window
  switch (type) {
  case '@@Response/kcsapi/api_get_member/mapinfo':
    return indexify(body)
  case '@@Response/kcsapi/api_req_map/select_eventmap_rank': {
    const id = `${postBody.api_maparea_id}${postBody.api_map_no}`
    state = state.slice()
    state[id] = {
      ...state[id],
      api_selected_rank: postBody.api_rank,
    }
    return state
  }
  }
  return state
}

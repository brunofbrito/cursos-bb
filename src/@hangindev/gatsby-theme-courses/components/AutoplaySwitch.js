import React from "react"
import { useAppValue } from "../context/AppContext"
import styled from "styled-components"

const Switch = styled.div`
  text-align: right;
  padding: 0.5rem 1rem;
  small {
    color: var(--dark-grey);
    margin-right: 0.5rem;
  }
`

function AutoplaySwitch() {
  const [{ autoplay }, dispatch] = useAppValue()
  return (
    <Switch>
      <label htmlFor="Autoplay">
        <small>Autoplay</small>
        <input
          type="checkbox"
          name="autoplay"
          checked={autoplay}
          onChange={e =>
            dispatch({
              type: "setAutoplay",
              autoplay: e.target.checked,
            })
          }
          id="Autoplay"
        />{" "}
      </label>
    </Switch>
  )
}

export default AutoplaySwitch

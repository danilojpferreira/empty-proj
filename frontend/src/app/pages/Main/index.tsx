/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Card, Select, Typing } from '../../components'
import { ArrowRight } from '../../../assets/icons'
import './styles.scss'

const Main = (): JSX.Element => {
  const navigate = useNavigate()
  const [showList, setShowList] = useState<boolean>(false)
  const [picker, setPicker] = useState<string>()

  return (
    <Card className="main_card">
      <Typing
        sentences={['Hello World,', 'Lets code?']}
        onFinish={() => setShowList(true)}
      />
      {showList && (
        <Select
          id="destiny"
          label="Pick your destiny"
          selected={picker}
          // @ts-ignore
          onSelect={setPicker}
          options={[
            {
              value: 'yes',
              label: 'Yes',
            },
            {
              value: 'no',
              label: 'No',
            }
          ]}
        />
      )}

      {picker ? (
        <Button
          text="GO"
          rightIcon={<ArrowRight />}
          onClick={() => navigate(`/${picker}`)}
        />
      ) : (
        <div />
      )}
    </Card>
  )
}

export default memo(Main)

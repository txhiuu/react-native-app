import { ThemedView } from '@/components/themed-view'
import React from 'react'

const Spacer = ({width = "100%"as any, height = 40}) => { //as const: biến giá trị trở nên cụ thể hơn-không thể thay đổi , as any: ép kiểu  
  return (
    <ThemedView style ={{width, height}}/>
  )
}
export default Spacer
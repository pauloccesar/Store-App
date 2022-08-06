import React from 'react';
import { Card, Image, Title, TouchableOpacity } from './styles';


interface Props {
  title: string;
  url: string;
  onPress: () => void;
}

export function CardComponent({
  title,
  url,
  onPress
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Card>
        <Image
          source={{ uri: url }}
        />
        <Title numberOfLines={1}>{title}</Title>
      </Card>
    </TouchableOpacity>
  );
}
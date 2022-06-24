import React, { useState } from "react";
import { Button, Text, View, Image } from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";

const VisiMisi = () => {
  const [isModalVisibleVisi, setModalVisibleVisi] = useState(false);
  const [isModalVisibleMisi, setModalVisibleMisi] = useState(false);

  const toggleModalVisi = () => {
    setModalVisibleVisi(!isModalVisibleVisi);
  };

  const toggleModalMisi = () => {
    setModalVisibleMisi(!isModalVisibleMisi);
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewtombolvisimisi} >
        <Button title="Visi" color="#303eac" onPress={toggleModalVisi} />
      </View>
      <Text style={styles.textvisimisi1}>"Menjadi universitas unggul di bidang bisnis dan kewirausahaan di tingkat global 2038."</Text>
      <View style={styles.viewtombolvisimisi} >
        <Button title="Misi" color="#303eac" onPress={toggleModalMisi} />
      </View>
      <Text style={styles.textvisimisi2}>"Menyelenggarakan pendidikan berbasis kewirausahaan {'\n'} dan bisnis dalam rangka menyiapkan SDM yang Mandiri, inOvatif, Visioner, berIman, dan berorientasi Global ( MOVING )."</Text>
      <View>
        <Image source={require('../assets/wisuda.png')}
          style={styles.assetgambarvisimisi} />
      </View>
      <Modal isVisible={isModalVisibleVisi}>
        <View style={styles.areahasilmodal}>
          <Text style={styles.textjudulmodal}>VISI</Text>
          <Text style={styles.textmodal}>"Menjadi universitas unggul di bidang bisnis dan kewirausahaan di tingkat global 2038."</Text>
          <View style={styles.viewbuttonmodal}>
            <Button title=" x " color="#e62129" onPress={toggleModalVisi} />
          </View>
        </View>
      </Modal>
      <Modal isVisible={isModalVisibleMisi}>
        <View style={styles.areahasilmodal}>
          <Text style={styles.textjudulmodal}>MISI</Text>
          <Text style={styles.textmodal}>"Menyelenggarakan pendidikan berbasis kewirausahaan dan bisnis dalam rangka menyiapkan SDM yang Mandiri, inOvatif, Visioner, berIman, dan berorientasi Global ( MOVING )."</Text>
          <View style={styles.viewbuttonmodal}>
            <Button title=" x " color="#e62129" onPress={toggleModalMisi} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default VisiMisi;
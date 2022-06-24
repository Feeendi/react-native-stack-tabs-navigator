import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'

const Profil = () => {
  return (
    <ScrollView >
      <View style={styles.viewprofil1}>
        <View style={styles.viewprofil2}>
          <Image source={require('../assets/gedung.jpg')} style={styles.assetgambarprofil} />
        </View>
      </View>

      <View style={styles.containerareaprofile}>
        <Text style={styles.textprofile}>
          <Text style={styles.textsejarah}>
            Sejarah...</Text>
          {'\n'}{'\n'}{'\n'}" Universitas Duta Bangsa  Surakarta tidak terlepas berdirinya Lembaga Kursus dan Pelatihan ( LKP ) Aksmi Kusuma Bangsa yang berdiri pada tahun 1995 yang didirikan oleh Bapak Drs. Singgih Purnomo melalui Yayasan Kusuma Bangsa Adi Prakasa.
          Seiring dengan meningkatnya kesejahteraan masyarakat, maka tuntutan untuk mengikuti pendidikan yang lebih tinggi juga semakin meningkat, oleh sebab itu melalui Yayasan Internusa disiapkan proposal pendirian perguruan tinggi pada tahun 2001 yaitu usulan Akademi Perekam Medik dan Informatika Kesehatan ( APIKES ) Citra Medika.
          {'\n'}Berdasarkan hasil rapat pengurus SMIK Duta Bangsa, Apikes CItra Medika dan Akademi Kebidanan Citra Medika kembali diusulkan penggabungan ketiga institusi ini menjadi Universitas pada tahun 2016 dan pada tanggal 29 Agustus 2018 oleh Kementrian Riset, Teknologi, dan Pendidikan Tinggi... "

        </Text>
      </View>
    </ScrollView>
  )
}

export default Profil;
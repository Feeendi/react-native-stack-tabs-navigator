import { Text, View, TextInput, Button, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './styles';

const Item = ({ nama, alamat, handphone }) => {
  return (
    <View style={styles.areahasil}>
      <TouchableOpacity>
        <Image
          source={{ uri: `https://robohash.org/${handphone}` }}
          style={styles.avatar}
        />
      </TouchableOpacity>
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.hasiltextinputdata1}>{nama}</Text>
        <Text style={styles.hasiltextinputdata2}>{alamat}</Text>
        <Text style={styles.hasiltextinputdata2}>{handphone}</Text>
      </View>
    </View>
  );
};

const BukuTamu = () => {
  const [nama, setNama] = useState('');
  const [alamat, setAlamat] = useState('');
  const [handphone, setHandphone] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      nama: nama,
      alamat: alamat,
      handphone: handphone,
    }
    console.log('data before send', data);
    axios.post('http://10.0.2.2:3004/localusers', data).then(res => {
      console.log('res: ', res);
      setNama('');
      setAlamat('');
      setHandphone('');
      getData();
    })
  };

  const getData = () => {
    axios.get('http://10.0.2.2:3004/localusers').then(res => {
      console.log('res get data:', res);
      setUsers(res.data);
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.area}>
        <Text style={styles.subjudul}>FORM BUKU TAMU</Text>
        <Text style={styles.textinputdata}>Nama</Text>
        <TextInput
          style={styles.textinputan}
          placeholderTextColor="#303eac"
          placeholder="Silakan masukan nama"
          value={nama}
          onChangeText={value => setNama(value)}
        />
        <Text style={styles.textinputdata}>Alamat</Text>
        <TextInput
          style={styles.textinputan}
          placeholderTextColor="#303eac"
          placeholder="Silakan masukan alamat"
          value={alamat}
          onChangeText={value => setAlamat(value)}
        />
        <Text style={styles.textinputdata}>Handphone</Text>
        <TextInput
          style={styles.textinputan}
          placeholderTextColor="#303eac"
          placeholder="Silakan masukan no. handphone"
          value={handphone}
          onChangeText={value => setHandphone(value)}
        />
      </View>
      <View style={styles.viewtombol}>
        <Button title="Simpan" color="#303eac" onPress={submit} />
      </View>
      <View style={styles.garis} />
      <View style={styles.area}>
        <Text style={styles.subjudul}>HASIL FORM</Text>
        {users.map(user => {
          return (
            <Item
              key={user.id}
              nama={user.nama}
              alamat={user.alamat}
              handphone={user.handphone}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default BukuTamu;



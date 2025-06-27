import React, { useState, useEffect } from 'react';
import {
    View, Text, TextInput, Button, StyleSheet, ScrollView,
    ActivityIndicator, Alert, Modal, TouchableOpacity, Platform
} from 'react-native';
import axios from 'axios';

const API_URL = 'http://192.168.1.26:3000';

interface Post {
    id: number
    name: string
    email: string
}

export default function ApiExample() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [postToDelete, setPostToDelete] = useState<number | null>(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            setLoading(true);

            const response = await axios.get(API_URL);
            const data = response.data;

            setPosts(data);
            setError(null);
        } catch (err: unknown) {
            setError('Error fetching posts: ' + (err as Error).message);
        } finally {
            setLoading(false);
        }
    }

    const savePost = async () => {
        try {
            setLoading(true);

            const payload = {
                name: name,
                email: email
            }

            if (id > 0) {
                await axios.put(API_URL + '/' + id, payload);
                setId(0);
            } else {
                await axios.post(API_URL, payload);
            }

            setName('');
            setEmail('');
            setError(null);

            fetchPosts();
        } catch (err: unknown) {
            setError('Error creating post: ' + (err as Error).message);
        } finally {
            setLoading(false);
        }
    }

    const deletePost = (id: number) => {
        if (Platform.OS === 'web') {
            setPostToDelete(id);
            setShowDeleteModal(true);
        } else {
            Alert.alert('ลบ Post', 'ยืนยันการลบ post?', [
                { text: 'ยกเลิก', style: 'cancel' },
                {
                    text: 'ลบ', onPress: async () => {
                        await performDelete(id);
                    }
                }
            ])
        }
    }

    const performDelete = async (id: number) => {
        try {
            setLoading(true);
            const url = API_URL + '/' + id;
            await axios.delete(url);
            fetchPosts();
        } catch (err: unknown) {
            setError('Error deleting post: ' + (err as Error).message);
        } finally {
            setLoading(false);
            setShowDeleteModal(false);
            setPostToDelete(null);
        }
    }

    const editPost = (id: number) => {
        const post = posts.find((post: Post) => post.id === id);

        if (post) {
            const postData = post as Post;
            setId(id);
            setName(postData.name);
            setEmail(postData.email);
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>API Example</Text>
            <View style={styles.form}>
                <Text style={styles.subtitle}>Create New Post</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Name'
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    multiline
                    numberOfLines={4}
                />
                <Button title='save' onPress={savePost} />
            </View>

            {error && <Text style={styles.error}>{error}</Text>}

            {loading && <ActivityIndicator size="large" color='#0000ff' />}

            <View style={styles.postsContainer}>
                <Text style={styles.subtitle}>Posts</Text>
                {posts.map((post: Post) => (
                    <View key={post.id} style={styles.post}>
                        <Text style={styles.postTitle}>{post.name}</Text>
                        <Text>{post.email}</Text>

                        <View style={styles.buttonContainer}>
                            <Button title='Delete' onPress={() => deletePost(post.id)} color='red' />
                            <Button title='Edit' onPress={() => editPost(post.id)} color='green' />
                        </View>
                    </View>
                ))}
            </View>

            <Modal
                visible={showDeleteModal}
                transparent
                animationType='fade'
                onRequestClose={() => setShowDeleteModal(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>ลบ Post</Text>
                        <Text style={styles.modalText}>ยืนยันการลบ post ?</Text>
                        <View style={styles.modalButtonContainer}>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.cancelButton]}
                                onPress={() => setShowDeleteModal(false)}>
                                <Text style={styles.cancelButtonText}>ยกเลิก</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.deleteButton]}
                                onPress={() => postToDelete && performDelete(postToDelete)}>
                                <Text style={styles.deleteButtonText}>ลบ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    buttonContainer: {
        marginTop: 10,
        flexDirection: 'row',
        gap: 3
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    form: {
        marginBottom: 20,
        padding: 16,
        backgroundColor: '#f5f5f5',
        borderRadius: 8
    },
    input: {
        borderWidth: 2,
        borderColor: '#ddd',
        padding: 8,
        marginBottom: 10,
        borderRadius: 8,
        backgroundColor: 'white'
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top'
    },
    error: {
        color: 'red',
        marginBottom: 10
    },
    postsContainer: {
        marginTop: 20
    },
    post: {
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    postTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 24,
        borderRadius: 12,
        alignItems: 'center',
        minWidth: 300
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8
    },
    modalText: {
        marginBottom: 16,
        textAlign: 'center'
    },
    modalButtonContainer: {
        flexDirection: 'row',
        gap: 12
    },
    modalButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 6,
        minWidth: 80,
        alignItems: 'center'
    },
    cancelButton: {
        backgroundColor: '#f0f0f0'
    },
    deleteButton: {
        backgroundColor: '#ff4444'
    },
    cancelButtonText: {
        color: '#666'
    },
    deleteButtonText: {
        color: 'white'
    }
})




















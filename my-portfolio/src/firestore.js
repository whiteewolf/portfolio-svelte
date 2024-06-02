// firestore.js
import { db } from './firebase';
import { doc, setDoc, collection , getDocs} from 'firebase/firestore';

// Function to update project status in Firestore
export async function updateProjectStatus(projectId, status) {
  try {
    const projectDocRef = doc(db, 'projects', projectId);
    await setDoc(projectDocRef, { status }, { merge: true });
    console.log(`Project status updated successfully for project with ID ${projectId}`);
  } catch (error) {
    console.error('Error updating project status:', error);
    throw error;
  }
}
export async function getProjects() {
    try {
      const projectsCollection = collection(db, 'projects');
      const snapshot = await getDocs(projectsCollection);
      const projects = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return projects;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  }

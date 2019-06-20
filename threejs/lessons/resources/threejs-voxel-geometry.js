'use strict';

/* global THREE, threejsLessonUtils */

{
  threejsLessonUtils.addDiagrams({
    mergedCubes: {
      create() {
        const geometries = [];
        const width = 3;
        const height = 2;
        const depth = 2;
        for (let y = 0; y < height; ++y) {
          for (let z = 0; z < depth; ++z) {
            for (let x = 0; x < width; ++x) {
              const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
              geometry.applyMatrix((new THREE.Matrix4()).makeTranslation(x, y, z));
              geometries.push(geometry);
            }
          }
        }
        const mergedGeometry = THREE.BufferGeometryUtils.mergeBufferGeometries(geometries, false);
        const material = new THREE.MeshBasicMaterial({
          color: 'black',
          wireframe: true,
        });
        const mesh = new THREE.Mesh(mergedGeometry, material);
        mesh.position.set(
            0.5 - width / 2,
            0.5 - height / 2,
            0.5 - depth / 2);
        const base = new THREE.Object3D();
        base.add(mesh);
        base.scale.setScalar(3.5);
        return base;
      },
    },
    culledCubes: {
      create() {
        const geometry = new THREE.BoxBufferGeometry(3, 2, 2, 3, 2, 2);
        const material = new THREE.MeshBasicMaterial({
          color: 'black',
          wireframe: true,
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.scale.setScalar(3.5);
        return mesh;
      },
    },
  });
}

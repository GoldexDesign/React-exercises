function solution(A, K) {
  const N = A.length;
  if (N === 0) {
    return A;
  }

  K = K % N;

  const rotatedArray = [];

  for (let i = 0; i < N; i++) {
    const newIndex = (i + K) % N;
    rotatedArray[newIndex] = A[i];
  }

  return rotatedArray;
}
/* 
 `solution` function works:

1. The function `solution(A, K)` takes an array `A` and an integer `K` as inputs.
2. It starts by checking the length of the input array `A` (denoted as `N`).
3. If the array is empty (i.e., `N` is 0), the function returns the same array `A` since no rotation is needed for an empty array.
4. If the array is not empty, the function calculates `K % N` to ensure that `K` is within a valid range to prevent unnecessary rotations. This is done to handle cases where `K` is larger than the length of the array.
5. A new array `rotatedArray` is initialized to store the rotated elements.
6. The function then enters a loop that iterates through each index `i` of the original array `A`.
7. For each index `i`, the new index after rotation, denoted as `newIndex`, is calculated using the formula `(i + K) % N`. This calculates the position where the element at index `i` will be placed after rotation.
8. The element at the current index `i` of the original array `A` is assigned to the `rotatedArray` at the calculated `newIndex`.
9. After completing the loop, the `rotatedArray` contains the elements of the input array `A` in their rotated positions.
10. The function returns the `rotatedArray` as the result.

This approach ensures that each element in the input array is shifted to the right by `K` positions while maintaining the correct rotation behavior. It calculates the new index after rotation for each element and populates the `rotatedArray` accordingly.
*/

// #include<bits/stdc++.h>
// using namespace std;

// int main()
// {
//     int t;
//     cin>>t;
//     while(t--)
//     {
//         int n,k;
//         cin>>n>>k;
//         string s;
//         cin>>s;
//         int n=s.length();
//         vector<int>input(n);
//         for(int i=0;i<n;i++)
//         {
//             input[i]=s[i]-'0';
//         }
//         vector<int>vect(n,0);
//         vect[0]=(10-input[0])%10;
//         for(int i=1;i<n;i++)
//         {
//             if(input[i]>=input[i-1])
//                 vect[i]=vect[i-1];
//             else
//             {
//                 int k=i;
//                 while(k>=0)
//                 {
//                     vect[i]+=(10-input[0])
//                 }
//             }
//         }
//     }
// }